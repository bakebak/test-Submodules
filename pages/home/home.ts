import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as connectivity from 'connectivity';
import { isAndroid } from 'platform';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import * as dialogs from 'ui/dialogs';
import { GridLayout } from 'ui/layouts/grid-layout';
import { Page } from 'ui/page';
import { openUrl } from 'utils/utils';

import { appSettings } from '../../../app.settings';
import { LiveSettings } from '../../services/live-settings';
import { NotificationService } from '../../services/notification';
import { OfferService } from '../../services/offer';
import { PopUp } from '../../services/popup';
import { TutorialService } from '../../services/tutorial';

@Component({
  moduleId: module.id,
  selector: 'HomePage',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePage implements OnInit, OnDestroy {
  public tutorial: boolean = false;
  public hasConnection: boolean = true;
  public isHmlBuild: boolean = appSettings.IS_HML_ENDPOINT;

  public isSearching: boolean = false;
  public search: string = '';
  public componentSearch: string = '';

  public hasOffers: boolean;
  public offersBgColor: string = '#FFFFFF';
  public popupImage: string = '';

  public get tab(): string {
    return this._tab;
  }

  public set tab(tab: string) {
    if (tab === 'meudesconto') this.configureTutorialAnimation();
    this._tab = tab;
  }

  private _tab: string = 'ganhometro';

  constructor(
    private page: Page,
    private ngZone: NgZone,
    private tutorialService: TutorialService,
    private popUpService: PopUp,
    private notificationService: NotificationService,
    private offerService: OfferService,
    private liveSettings: LiveSettings
  ) { }

  public ngOnInit(): void {
    this.page.actionBarHidden = false;

    this.notificationService.initialize();

    this.popUpService.getPopup().subscribe(popup => {
      console.log(`POPUP: ${popup}`);
      this.ngZone.run(() => {
        this.tab = 'meudesconto';
      });
      this.popupImage = popup;
    });

    this.liveSettings.getSettings('offers_bg_color', this.offersBgColor).subscribe((value) => {
      this.offersBgColor = value;
    });

    this.configureTutorialAnimation();
  }

  public ngOnDestroy(): void {
    this.page.off('navigatedTo');
    connectivity.stopMonitoring();
  }

  public hideTutorial(): void {
    this.tutorialService.hideTutorial();
  }

  public enableSearch(): void {
    this.isSearching = true;
    setTimeout(() => {
      const searchTextField = this.page.getViewById<TextField>('txtSearch');
      searchTextField.focus();
    }, 300);
  }

  public searchOffers(): void {
    console.log('Home: search offers');
    this.componentSearch = this.search;
  }

  public clearSearch(): void {
    console.log('Home: clear search');
    this.componentSearch = this.search = '';
    this.isSearching = false;
  }

  public dismissPopUp(): void {
    this.popUpService.markAsViewed(this.popupImage);
    this.popupImage = null;
  }

  private watchConnection(): void {
    this.hasConnection = connectivity.getConnectionType() != connectivity.connectionType.none;

    connectivity.startMonitoring((connectionType: number) => {
      this.ngZone.run(() => {
        this.hasConnection = connectionType != connectivity.connectionType.none;
      });

      console.log(`Home: Connection changed ${connectionType} HasConnection: ${this.hasConnection}`);
    });

    this.page.on('navigatingTo', () => {
      this.ngZone.run(() => {
        setTimeout(() => {
          console.log('Home: navigatedTo');
          this.hasConnection = connectivity.getConnectionType() != connectivity.connectionType.none;
        });
      });
    });
  }

  private configureTutorialAnimation(): void {
    this.tutorialService
      .init()
      .debounceTime(500)
      .subscribe(show => {
        const tutorial = this.page.getViewById<GridLayout>('tutorial');

        if (!tutorial || !tutorial.animate) {
          return;
        }

        setTimeout(() => {
          if (show) {
            if (this.tutorial) return;
            this.tab = 'meudesconto';
            this.tutorial = true;
            tutorial.animate({
              translate: { x: -200, y: 0 },
              opacity: 0,
              duration: 0
            }).then(() => {
              tutorial.animate({
                translate: { x: 0, y: 0 },
                opacity: 1,
                duration: 500
              });
            });

            return;
          }

          tutorial.animate({
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 0
          }).then(() => {
            tutorial.animate({
              translate: { x: -200, y: 0 },
              opacity: 0,
              duration: 500
            }).then(() => {
              this.tutorial = false;
            });
          });

        });

      });
  }

}