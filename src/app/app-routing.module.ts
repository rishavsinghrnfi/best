 
import { MobikwikCheckoutWalletComponent } from './pages/wallet/mobikwik-checkout-wallet/mobikwik-checkout-wallet.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BbpsDashboardComponent } from './pages/bbps/bbps-dashboard/bbps-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckMobileComponent as DmtCheckMobileComponent } from './pages/dmt/check-mobile/check-mobile.component';
import { DmtdashoardComponent } from './pages/dmt/dmtdashoard/dmtdashoard.component';
import { DmthandlerComponent } from './pages/dmt/dmthandler/dmthandler.component';
import { RegistrationComponent } from './pages/dmt/registration/registration.component';
import { TransactionConfirmComponent } from './pages/dmt/transaction-confirm/transaction-confirm.component';
import { AepshandlerComponent } from './pages/aeps/aepshandler/aepshandler.component';
import { CashWithdrawlComponent } from './pages/aeps/cash-withdrawl/cash-withdrawl.component';
import { BalanceEnquiryComponent } from './pages/aeps/balance-enquiry/balance-enquiry.component';
import { MiniStatementComponent } from './pages/aeps/mini-statement/mini-statement.component';
import { AadhaarPayComponent } from './pages/aeps/aadhaar-pay/aadhaar-pay.component';
import { ScannerSettingComponent } from './pages/aeps/scanner-setting/scanner-setting.component';
import { BbpshandlerComponent } from './pages/bbps/bbpshandler/bbpshandler.component';
import { BbpsPartnerComponent } from './pages/bbps/bbps-partner/bbps-partner.component';
import { PaymentStatusComponent } from './pages/bbps/payment-status/payment-status.component';
import { LicComponent } from './pages/bbps/lic/lic.component'; 
import { CheckWalletComponent } from './pages/wallet/check-wallet/check-wallet.component';
import { CheckoutWalletComponent } from './pages/wallet/checkout-wallet/checkout-wallet.component';
import { RechargeHandlerComponent } from './pages/recharge/recharge-handler/recharge-handler.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';
import { AccountCreateHandlerComponent } from './pages/create/account-create-handler/account-create-handler.component';
import { CreateAdminComponent } from './pages/create/admin/create-admin/create-admin.component';
import { ListAdminComponent } from './pages/create/admin/list-admin/list-admin.component';
import { CreatePartnerComponent } from './pages/create/partner/create-partner/create-partner.component';
import { ListPartnerComponent } from './pages/create/partner/list-partner/list-partner.component';
import { CreateDistributorComponent } from './pages/create/distributor/create-distributor/create-distributor.component';
import { ListDistributorComponent } from './pages/create/distributor/list-distributor/list-distributor.component';
import { FundHandlerComponent } from './pages/fund/fund-handler/fund-handler.component';
import { FundRequestListingComponent } from './pages/fund/fund-request-listing/fund-request-listing.component';
import { CreateFundRequestComponent } from './pages/fund/create-fund-request/create-fund-request.component';
import { FundTransferToRetailerComponent } from './pages/fund/fund-transfer-to-retailer/fund-transfer-to-retailer.component';
import { FundAdminListingComponent } from './pages/fund/fund-admin-listing/fund-admin-listing.component';
import { FundAdminCreateComponent } from './pages/fund/fund-admin-create/fund-admin-create.component';
import { FundAdminApproveComponent } from './pages/fund/fund-admin-approve/fund-admin-approve.component';
import { AddCompanyBankComponent } from './pages/funds/company-bank/add-company-bank/add-company-bank.component';
import { ListCompanyBankComponent } from './pages/funds/company-bank/list-company-bank/list-company-bank.component';
import { CreateRetailerComponent } from './pages/create/retailer/create-retailer/create-retailer.component';
import { ListRetailerComponent } from './pages/create/retailer/list-retailer/list-retailer.component';
import { PermissionsComponent } from './pages/create/users-permissions/permissions/permissions.component';
import { CreateAsmComponent } from './pages/create/asm/create-asm/create-asm.component';
import { ListAsmComponent } from './pages/create/asm/list-asm/list-asm.component';
import { CreateSupdistributorComponent } from './pages/create/super-distributor/create-supdistributor/create-supdistributor.component';
import { ListSupdistributorComponent } from './pages/create/super-distributor/list-supdistributor/list-supdistributor.component';
import { RedirectComponent } from './redirect/redirect.component';
import { PgRecepitComponent } from './pages/pg-recepit/pg-recepit.component'; 
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { CashdepositHandlerComponent } from './pages/cash-deposit/cashdeposit-handler/cashdeposit-handler.component';
import { SendOtpComponent } from './pages/cash-deposit/send-otp/send-otp.component';
import { TransactionComponent } from './pages/cash-deposit/transaction/transaction.component';
import { FundTransferComponent } from './pages/funds/fund-transfer/fund-transfer.component';
import { ServiceControlComponent } from './pages/super-admin/service-control/service-control.component';
import { FundTransferListComponent } from './pages/funds/fund-transfer-list/fund-transfer-list.component';
import { NotificationhandlerComponent } from './pages/super-admin/notification/notificationhandler/notificationhandler.component';
import { AddNotificationComponent } from './pages/super-admin/notification/add-notification/add-notification.component';
import { ListNotificationComponent } from './pages/super-admin/notification/list-notification/list-notification.component';
import { CommissionComponent } from './pages/commission/commission.component';
import { AepsComponent } from './pages/commission/aeps/aeps.component';
import { DmtComponent } from './pages/commission/dmt/dmt.component';
import { MatmComponent } from './pages/commission/matm/matm.component';
import { RechargeComponent } from './pages/commission/recharge/recharge.component';
import { PgComponent } from './pages/commission/pg/pg.component';
import { AddcomplaintComponent } from './pages/complaint/addcomplaint/addcomplaint.component';
import { ListcomplaintComponent } from './pages/complaint/listcomplaint/listcomplaint.component';
import { ComplainthandlerComponent } from './pages/complaint/complainthandler/complainthandler.component';
import { CheckTxnStatusComponent } from './pages/dmt/check-txn-status/check-txn-status.component';
import { RefundComponent } from './pages/dmt/refund/refund.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { PayoutComponent } from './pages/payout/payout.component';
import { ListAccountComponent } from './pages/payout/list-account/list-account.component';
import { AddAccountComponent } from './pages/payout/add-account/add-account.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RefundCancellationPolicyComponent } from './pages/refund-cancellation-policy/refund-cancellation-policy.component';
import { TermConditionComponent } from './pages/term-condition/term-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { StatusEnquiryComponent } from './pages/payout/status-enquiry/status-enquiry.component';
import { AddRateComponent } from './pages/super-admin/add-rate/add-rate.component';
import { TransactionsComponent } from './pages/dmt/transactions/transactions.component';
import { ListComplaintComponent } from './pages/super-admin/trackcomplaint/list-complaint/list-complaint.component';
import { ComplaintChatComponent } from './pages/complaint/complaint-chat/complaint-chat.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { IdPurchaseComponent } from './pages/purchase/id-purchase/id-purchase.component';
import { PurchaseHistoryComponent } from './pages/purchase/purchase-history/purchase-history.component';
import { IdTransferComponent } from './pages/purchase/id-transfer/id-transfer.component';
import { SignupFormComponent } from './pages/super-admin/signup-form/signup-form.component';
import { SignupUserListComponent } from './pages/super-admin/signup-user-list/signup-user-list.component';
import { PrintDetailsComponent } from './pages/print-details/print-details.component';
import { MarchantOnboardingComponent } from './pages/marchant/marchant-onboarding/marchant-onboarding.component';
import { MarchantListComponent } from './pages/marchant/marchant-list/marchant-list.component';
import { OthercommComponent } from './pages/commission/othercomm/othercomm.component';
import { BillpaycommComponent } from './pages/commission/othercomm/billpaycomm/billpaycomm.component';
import { CommAadhaarComponent } from './pages/commission/othercomm/comm-aadhaar/comm-aadhaar.component';
import { CommCashdepositComponent } from './pages/commission/othercomm/comm-cashdeposit/comm-cashdeposit.component';
import { CommMiniStatementComponent } from './pages/commission/othercomm/comm-mini-statement/comm-mini-statement.component';
import { CommSettlementComponent } from './pages/commission/othercomm/comm-settlement/comm-settlement.component';
import { MobikcommComponent } from './pages/commission/othercomm/mobikcomm/mobikcomm.component';
import { PaytmcomComponent } from './pages/commission/othercomm/paytmcom/paytmcom.component';
import { CallbackurlComponent } from './pages/callbackurl/callbackurl.component';
import { CreateStaffComponent } from './pages/create/staff/create-staff/create-staff.component';
import { ListStaffComponent } from './pages/create/staff/list-staff/list-staff.component';
import { AddFundComponent } from './pages/super-admin/fund/add-fund/add-fund.component'; 
import { AepsReceiptComponent } from './pages/aeps-receipt/aeps-receipt.component';
import { FundRequestListAdminComponent } from './pages/fund/fund-request-list-admin/fund-request-list-admin.component';
import { CreditCardBillComponent } from './pages/credit-card/credit-card-bill/credit-card-bill.component';
import { CreditCardHandlerComponent } from './pages/credit-card/credit-card-handler/credit-card-handler.component';
import { CashWithdrawalReceiptComponent } from './pages/aeps-receipt/cash-withdrawal-receipt/cash-withdrawal-receipt.component';
import { BalanceEnquiryReceiptComponent } from './pages/aeps-receipt/balance-enquiry-receipt/balance-enquiry-receipt.component';
import { MiniStatementReceiptComponent } from './pages/aeps-receipt/mini-statement-receipt/mini-statement-receipt.component';
import { AadharPayReceiptComponent } from './pages/aeps-receipt/aadhar-pay-receipt/aadhar-pay-receipt.component';
 
import { UploadDocumentsComponent } from './pages/kyc/kyc/upload-documents/upload-documents.component';
import { KycUserListComponent } from './pages/kyc/kyc/kyc-user-list/kyc-user-list.component';
import { DebitReceivingComponent } from './pages/admin/debit-receiving/debit-receiving.component';
import { MinistatementTxnComponent } from './pages/aeps/ministatement-txn/ministatement-txn.component';
import { PanComponent } from './pages/pan/pan.component';
import { PanStatementComponent } from './pages/pan/pan-statement/pan-statement.component'; 
import { PayoutCommissionComponent } from './pages/commission/payout-commission/payout-commission.component';
import { CommLicBillpayComponent } from './pages/commission/othercomm/comm-lic-billpay/comm-lic-billpay.component';
import { PancommComponent } from './pages/commission/othercomm/pancomm/pancomm.component';
import { PaytmWalletComponent } from './pages/commission/othercomm/paytm-wallet/paytm-wallet.component';
import { CcBillPayComponent } from './pages/commission/othercomm/cc-bill-pay/cc-bill-pay.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MobikwikCheckWalletComponent } from './pages/wallet/mobikwik-check-wallet/mobikwik-check-wallet.component'; 
import { RetailerNotificationComponent } from './pages/retailer-notification/retailer-notification.component'; 
import { WebsiteSettingsComponent } from './pages/website-settings/website-settings.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path: 'signup',
  //   component: SignUpComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'bbps',
    component: BbpshandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BbpsDashboardComponent
      },
      {
        path: 'lic',
        component: LicComponent
      },
      {
        path: 'payment-status/:ref',
        component: PaymentStatusComponent
      },
      {
        path: 'payment-status',
        component: PaymentStatusComponent
      },
      {
        path: ':type',
        component: BbpsPartnerComponent
      },
    ]
  },
  {
    path: 'aeps',
    component: AepshandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cash-withdrawal',
        component: CashWithdrawlComponent
      },
      {
        path: 'balance-enquiry',
        component: BalanceEnquiryComponent
      },
      {
        path: 'mini-statement',
        component: MiniStatementComponent
      },
      {
        path: 'aadhar-pay',
        component: AadhaarPayComponent
      },
      {
        path: 'scanner-setting',
        component: ScannerSettingComponent
      },
      {
        path: 'mini-statement-txn',
        component: MinistatementTxnComponent
      },
      // {
      //   path: 'receipt',
      //   component: ReceiptComponent
      // },
    ]

  },
  {
    path: 'pan',
    component: PanComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'statement',
        component: PanStatementComponent
      },
    ]
  },
  {
    path: 'receipt',
    component: AepsReceiptComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cash-withdrawal',
        component: CashWithdrawalReceiptComponent
      },
      {
        path: 'balance-enquiry',
        component: BalanceEnquiryReceiptComponent
      },
      {
        path: 'mini-statement',
        component: MiniStatementReceiptComponent
      },
      {
        path: 'aadhar-pay',
        component: AadharPayReceiptComponent
      },
    ]
  },
  {
    path: 'cash-deposit',
    component: CashdepositHandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SendOtpComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      }
    ]
  },
  {
    path: 'dmt',
    component: DmthandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DmtCheckMobileComponent
      }, {
        path: 'dashboard',
        component: DmtdashoardComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'transaction',
        component: TransactionConfirmComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      }
    ]
  },
  {
    path: 'paytm-wallet',
    component: CheckWalletComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mobikwik-wallet',
    component: MobikwikCheckWalletComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mobikwik-checkout',
    component: MobikwikCheckoutWalletComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'debit-receiving',
    component: DebitReceivingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'kyc-upload-documents',
    component: UploadDocumentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'kyc-user-list',
    component: KycUserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout-wallet',
    component: CheckoutWalletComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'print-details',
    component: PrintDetailsComponent,
    canActivate: [AuthGuard],
  },
 
  {
    path: 'account',
    component: AccountCreateHandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateAdminComponent
          },
          {
            path: 'update/:id',
            component: CreateAdminComponent
          },
          {
            path: 'list',
            component: ListAdminComponent
          },
        ]
      },
      {
        path: 'staff',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateStaffComponent
          }, {
            path: 'update/:id',
            component: CreateStaffComponent
          },
          {
            path: 'list',
            component: ListStaffComponent
          },
        ]
      },
      {
        path: 'partner',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreatePartnerComponent
          }, {
            path: 'update/:id',
            component: CreatePartnerComponent
          },
          {
            path: 'list',
            component: ListPartnerComponent
          },
        ]
      },
      {
        path: 'distributor',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateDistributorComponent
          }, {
            path: 'update/:id',
            component: CreateDistributorComponent
          },
          {
            path: 'list',
            component: ListDistributorComponent
          },
        ]
      },
      {
        path: 'retailer',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateRetailerComponent
          }, {
            path: 'update/:id',
            component: CreateRetailerComponent
          },
          {
            path: 'list',
            component: ListRetailerComponent
          },
        ]
      },
      {
        path: 'super-distributor',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateSupdistributorComponent
          }, {
            path: 'update/:id',
            component: CreateSupdistributorComponent
          },
          {
            path: 'list',
            component: ListSupdistributorComponent
          },
        ]
      },
      {
        path: 'asm',
        component: AccountCreateHandlerComponent,
        children: [
          {
            path: 'create',
            component: CreateAsmComponent
          }, {
            path: 'update/:id',
            component: CreateAsmComponent
          },
          {
            path: 'list',
            component: ListAsmComponent
          },
        ]
      }
    ]
  }, 
  {
    path: 'fund',
    component: FundHandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: FundRequestListingComponent
      },
      {
        path: 'create',
        component: CreateFundRequestComponent
      },
      {
        path: 'transfer',
        component: FundTransferToRetailerComponent
      },
      // {
      //   path: 'distributer',
      //   component: FundHandlerComponent,
      //   children: [ 
      //     {
      //       path: '',
      //       component: FundRequestListingComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateFundRequestComponent
      //     },
      //     {
      //       path: 'transfer',
      //       component: FundTransferToRetailerComponent
      //     },
      //   ]
      // },
      {
        path: 'admin',
        component: FundHandlerComponent,
        children: [
          {
            path: '',
            component: FundAdminListingComponent
          },
          {
            path: 'create',
            component: FundAdminCreateComponent
          },
          {
            path: 'approve/:id',
            component: FundAdminApproveComponent
          },
        ]
      },
    ]
  },
  {
    path: 'notification',
    component: NotificationhandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create',
        component: AddNotificationComponent
      },
      {
        path: 'update/:id',
        component: AddNotificationComponent
      },
      {
        path: '',
        component: ListNotificationComponent
      },
    ]
  },
  {
    path: 'commission',
    component: CommissionComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'aeps',
        component: AepsComponent
      },
      {
        path: 'dmt',
        component: DmtComponent
      },
      {
        path: 'payout',
        component: PayoutCommissionComponent
      },
      {
        path: 'matm',
        component: MatmComponent
      },
      {
        path: 'recharge',
        component: RechargeComponent
      },
      {
        path: 'pg',
        component: PgComponent
      },
      {
        path: 'othercomm',
        component: OthercommComponent,
        children: [
          {
            path: 'mobikcomm',
            component: MobikcommComponent
          },
          {
            path: '',
            component: BillpaycommComponent
          },
          {
            path: 'billpaycomm',
            component: BillpaycommComponent
          },
          {
            path: 'aadhaar',
            component: CommAadhaarComponent
          },
          {
            path: 'cashdeposit',
            component: CommCashdepositComponent
          },
          {
            path: 'ministatement',
            component: CommMiniStatementComponent
          },
          {
            path: 'lic-billpay',
            component: CommLicBillpayComponent
          },
          {
            path: 'settlement',
            component: CommSettlementComponent
          },
          {
            path: 'pan',
            component: PancommComponent,
          },
          {
            path: 'paytmwallet',
            component: PaytmWalletComponent,
          },
          {
            path: 'mobilmwallet',
            component: MobikcommComponent,
          },
          {
            path: 'ccBillPay',
            component: CcBillPayComponent
          }
        ]
      },
    ]
  },
  {
    path: 'payout',
    component: PayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ListAccountComponent
      },
      {
        path: 'create',
        component: AddAccountComponent
      },
      {
        path: 'status-enquiry',
        component: StatusEnquiryComponent
      },
    ]
  },
  {
    path: 'marchant-onboarding',
    component: MarchantOnboardingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'marchant-list',
    component: MarchantListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'recharge',
    component: RechargeHandlerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-gateway',
    component: PaymentGatewayComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-company-bank',
    component: AddCompanyBankComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-company-bank/:id',
    component: AddCompanyBankComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-company-bank',
    component: ListCompanyBankComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fund-transfer',
    component: FundTransferComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fund-transfer-history',
    component: FundTransferListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'control',
    component: ServiceControlComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-permission',
    component: PermissionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-rate',
    component: AddRateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Fund-request-list',
    component: FundRequestListAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pg-recepit',
    component: PgRecepitComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'complaint',
    component: ComplainthandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ListcomplaintComponent
      },
      {
        path: 'add',
        component: AddcomplaintComponent
      },
      {
        path: 'complaint-chat/:id',
        component: ComplaintChatComponent,
      },
    ]
  },
  {
    path: 'credit-card',
    component: CreditCardHandlerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bill',
        component: CreditCardBillComponent
      },
      // {
      //   path: 'add',
      //   component: AddcomplaintComponent
      // },
      // {
      //   path: 'complaint-chat/:id',
      //   component: ComplaintChatComponent,
      // },
    ]
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'purchaseid',
        component: IdPurchaseComponent
      },
      {
        path: 'purchase-history',
        component: PurchaseHistoryComponent
      },
      {
        path: 'id-transfer',
        component: IdTransferComponent
      }
    ]
  },
  {
    path: 'add-fund',
    component: AddFundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'complaints',
    component: ListComplaintComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'refund',
    component: RefundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup-user-list',
    component: SignupUserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'onboarding-redirect',
    component: CallbackurlComponent
  },
  // {
  //   path: 'signup',
  //   component: SignupFormComponent
  // },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PolicyComponent
  },
  {
    path: 'refund-cancellation-policy',
    component: RefundCancellationPolicyComponent
  },
  {
    path: 'term-condition',
    component: TermConditionComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path:'retailer-notification',
    component:RetailerNotificationComponent
  },

  {
    path: 'portal-settings',
    component: WebsiteSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
