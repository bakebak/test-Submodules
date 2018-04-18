import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { ComponentModule } from '../../components';
import { ServiceModule } from '../../services';
import { CommonComponentModule } from '../components';
import { CommonPipeModule } from '../pipes';
import { HomePageDiscountComponent } from './home/discount/discount';
import { HomePage } from './home/home';
import { HomePageRewardModalFormComponent } from './home/reward-modal/components/form';
import { HomePageRewardModal } from './home/reward-modal/reward-modal';
import { HomePageRewardsGoalsComponent } from './home/rewards/components/goals';
import { HomePageRewardsInstructionsModal } from './home/rewards/components/instructions';
import { HomePageRewardsPrizesComponent } from './home/rewards/components/prizes';
import { HomePageRewardsComponent } from './home/rewards/rewards';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    CommonPipeModule,
    CommonComponentModule,
    ComponentModule,
    ServiceModule,
    CommonModule
  ],
  declarations: [
    HomePage,
    HomePageDiscountComponent,
    HomePageRewardsComponent,
    HomePageRewardModal,
    HomePageRewardModalFormComponent,
    HomePageRewardsInstructionsModal,
    HomePageRewardsGoalsComponent,
    HomePageRewardsPrizesComponent
  ],
  entryComponents: [
    HomePageRewardModal,
    HomePageRewardsInstructionsModal
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CommonPageModule { }