import { PayoutCommissionComponent } from './pages/commission/payout-commission/payout-commission.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckMobileComponent } from './pages/dmt/check-mobile/check-mobile.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpRequestInterceptor } from './http-request.interceptor';
import { RegistrationComponent } from './pages/dmt/registration/registration.component';
import { DmtdashoardComponent } from './pages/dmt/dmtdashoard/dmtdashoard.component';
import { DmthandlerComponent } from './pages/dmt/dmthandler/dmthandler.component';
import { TransactionConfirmComponent } from './pages/dmt/transaction-confirm/transaction-confirm.component';
import { BbpsDashboardComponent } from './pages/bbps/bbps-dashboard/bbps-dashboard.component';
import { OtpVerificationDirective } from './directives/otp-verification.directive';
import { CustomModelComponent } from './_helpers/custom-model/custom-model.component';
import { NgSelect2Module } from 'ng-select2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceEnquiryComponent } from './pages/aeps/balance-enquiry/balance-enquiry.component';
import { MiniStatementComponent } from './pages/aeps/mini-statement/mini-statement.component';
import { AadhaarPayComponent } from './pages/aeps/aadhaar-pay/aadhaar-pay.component';
import { ScannerSettingComponent } from './pages/aeps/scanner-setting/scanner-setting.component';
import { CashWithdrawlComponent } from './pages/aeps/cash-withdrawl/cash-withdrawl.component';
import { AepshandlerComponent } from './pages/aeps/aepshandler/aepshandler.component';
import { BbpshandlerComponent } from './pages/bbps/bbpshandler/bbpshandler.component';
import { BbpsPartnerComponent } from './pages/bbps/bbps-partner/bbps-partner.component';
import { PaymentStatusComponent } from './pages/bbps/payment-status/payment-status.component';
import { LicComponent } from './pages/bbps/lic/lic.component'; 
import { DataTablesModule } from 'angular-datatables';
import { DataTableToolsComponent } from './_helpers/data-table-tools/data-table-tools.component';
import { CheckWalletComponent } from './pages/wallet/check-wallet/check-wallet.component';
import { CheckoutWalletComponent } from './pages/wallet/checkout-wallet/checkout-wallet.component';
import { RechargeHandlerComponent } from './pages/recharge/recharge-handler/recharge-handler.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RetailerComponent } from './sidebar/retailer/retailer.component';
import { AdminComponent } from './sidebar/admin/admin.component';
import { SuperAdminComponent } from './sidebar/super-admin/super-admin.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';
import { RetailerDashboardComponent } from './pages/dashboard/retailer-dashboard/retailer-dashboard.component';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { SuperadminDashboardComponent } from './pages/dashboard/superadmin-dashboard/superadmin-dashboard.component';
import { AccountCreateHandlerComponent } from './pages/create/account-create-handler/account-create-handler.component';
import { CreateAdminComponent } from './pages/create/admin/create-admin/create-admin.component';
import { ListAdminComponent } from './pages/create/admin/list-admin/list-admin.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CreatePartnerComponent } from './pages/create/partner/create-partner/create-partner.component';
import { ListPartnerComponent } from './pages/create/partner/list-partner/list-partner.component';
import { CreateDistributorComponent } from './pages/create/distributor/create-distributor/create-distributor.component';
import { ListDistributorComponent } from './pages/create/distributor/list-distributor/list-distributor.component';
import { DistributerComponent } from './sidebar/distributer/distributer.component';
import { FundHandlerComponent } from './pages/fund/fund-handler/fund-handler.component';
import { CreateFundRequestComponent } from './pages/fund/create-fund-request/create-fund-request.component';
import { FundRequestListingComponent } from './pages/fund/fund-request-listing/fund-request-listing.component';
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
import { SendOtpComponent } from './pages/cash-deposit/send-otp/send-otp.component';
import { TransactionComponent } from './pages/cash-deposit/transaction/transaction.component';
import { CashdepositHandlerComponent } from './pages/cash-deposit/cashdeposit-handler/cashdeposit-handler.component';
import { FundTransferComponent } from './pages/funds/fund-transfer/fund-transfer.component';
import { ServiceControlComponent } from './pages/super-admin/service-control/service-control.component';
import { FundTransferListComponent } from './pages/funds/fund-transfer-list/fund-transfer-list.component';
import { AddNotificationComponent } from './pages/super-admin/notification/add-notification/add-notification.component';
import { ListNotificationComponent } from './pages/super-admin/notification/list-notification/list-notification.component';
import { NotificationhandlerComponent } from './pages/super-admin/notification/notificationhandler/notificationhandler.component';
import { ListComplaintComponent } from './pages/super-admin/trackcomplaint/list-complaint/list-complaint.component';
import { CommissionComponent } from './pages/commission/commission.component';
import { AepsComponent } from './pages/commission/aeps/aeps.component';
import { DmtComponent } from './pages/commission/dmt/dmt.component';
import { MatmComponent } from './pages/commission/matm/matm.component';
import { RechargeComponent } from './pages/commission/recharge/recharge.component';
import { PgComponent } from './pages/commission/pg/pg.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ListcomplaintComponent } from './pages/complaint/listcomplaint/listcomplaint.component';
import { AddcomplaintComponent } from './pages/complaint/addcomplaint/addcomplaint.component';
import { ComplainthandlerComponent } from './pages/complaint/complainthandler/complainthandler.component';
import { CheckTxnStatusComponent } from './pages/dmt/check-txn-status/check-txn-status.component';
import { RefundComponent } from './pages/dmt/refund/refund.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { PayoutComponent } from './pages/payout/payout.component';
import { ListAccountComponent } from './pages/payout/list-account/list-account.component';
import { AddAccountComponent } from './pages/payout/add-account/add-account.component';
import { StatusEnquiryComponent } from './pages/payout/status-enquiry/status-enquiry.component';
import { RefundCancellationPolicyComponent } from './pages/refund-cancellation-policy/refund-cancellation-policy.component';
import { TermConditionComponent } from './pages/term-condition/term-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TransactionDetailsComponent } from './pages/payout/transaction-details/transaction-details.component';
import { AddRateComponent } from './pages/super-admin/add-rate/add-rate.component';
import { TransactionsComponent } from './pages/dmt/transactions/transactions.component';
import { ComplaintChatComponent } from './pages/complaint/complaint-chat/complaint-chat.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { IdPurchaseComponent } from './pages/purchase/id-purchase/id-purchase.component';
import { PurchaseHistoryComponent } from './pages/purchase/purchase-history/purchase-history.component';
import { IdTransferComponent } from './pages/purchase/id-transfer/id-transfer.component';
import { PartnerDashboardComponent } from './pages/dashboard/partner-dashboard/partner-dashboard.component';
import { SuperDistributorDashboardComponent } from './pages/dashboard/super-distributor-dashboard/super-distributor-dashboard.component';
import { DistributorDashboardComponent } from './pages/dashboard/distributor-dashboard/distributor-dashboard.component';
import { SuperDistributorComponent } from './sidebar/super-distributor/super-distributor.component';
import { PartnerComponent } from './sidebar/partner/partner.component';
import { SignupFormComponent } from './pages/super-admin/signup-form/signup-form.component';
import { SignupUserListComponent } from './pages/super-admin/signup-user-list/signup-user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule } from 'ngx-print';
import { PrintDetailsComponent } from './pages/print-details/print-details.component';
import { ModalModule } from 'ngb-modal';
import { MarchantOnboardingComponent } from './pages/marchant/marchant-onboarding/marchant-onboarding.component';
import { MarchantListComponent } from './pages/marchant/marchant-list/marchant-list.component';
import { MarchantDetailsComponent } from './pages/marchant/marchant-details/marchant-details.component';
import { OthercommComponent } from './pages/commission/othercomm/othercomm.component';
import { BillpaycommComponent } from './pages/commission/othercomm/billpaycomm/billpaycomm.component';
import { CommAadhaarComponent } from './pages/commission/othercomm/comm-aadhaar/comm-aadhaar.component';
import { CommCashdepositComponent } from './pages/commission/othercomm/comm-cashdeposit/comm-cashdeposit.component';
import { CommMiniStatementComponent } from './pages/commission/othercomm/comm-mini-statement/comm-mini-statement.component';
import { CommSettlementComponent } from './pages/commission/othercomm/comm-settlement/comm-settlement.component';
import { MobikcommComponent } from './pages/commission/othercomm/mobikcomm/mobikcomm.component';
import { PaytmcomComponent } from './pages/commission/othercomm/paytmcom/paytmcom.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { CallbackurlComponent } from './pages/callbackurl/callbackurl.component';
import { ShowNullResultPipe } from './_helpers/common/custom-pipes/show-null-result.pipe';
import { ReplacePipe } from './_helpers/common/custom-pipes/replace.pipe';
import { CreateStaffComponent } from './pages/create/staff/create-staff/create-staff.component';
import { AddFundComponent } from './pages/super-admin/fund/add-fund/add-fund.component';
import { ListStaffComponent } from './pages/create/staff/list-staff/list-staff.component'; 
import { FundRequestListAdminComponent } from './pages/fund/fund-request-list-admin/fund-request-list-admin.component';
import { CreditCardBillComponent } from './pages/credit-card/credit-card-bill/credit-card-bill.component';
import { CreditCardHandlerComponent } from './pages/credit-card/credit-card-handler/credit-card-handler.component';
import { AadharPayReceiptComponent } from './pages/aeps-receipt/aadhar-pay-receipt/aadhar-pay-receipt.component';
import { CashWithdrawalReceiptComponent } from './pages/aeps-receipt/cash-withdrawal-receipt/cash-withdrawal-receipt.component';
import { BalanceEnquiryReceiptComponent } from './pages/aeps-receipt/balance-enquiry-receipt/balance-enquiry-receipt.component';
import { MiniStatementReceiptComponent } from './pages/aeps-receipt/mini-statement-receipt/mini-statement-receipt.component';
import { AepsReceiptComponent } from './pages/aeps-receipt/aeps-receipt.component';
import { UploadDocumentsComponent } from './pages/kyc/kyc/upload-documents/upload-documents.component';
import { KycUserListComponent } from './pages/kyc/kyc/kyc-user-list/kyc-user-list.component'; 
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { GetIndexPipe } from './_helpers/common/custom-pipes/get-index.pipe';
import { SlipPrintComponent } from './_helpers/common/custome-modal/slip-print/slip-print.component';
import { AutocompleteOffDirective } from './directives/autocomplete-off.directive';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DebitReceivingComponent } from './pages/admin/debit-receiving/debit-receiving.component';
import { RiCustomMdlComponent } from './_helpers/common/custome-modal/ri-custom-mdl/ri-custom-mdl.component';
import { MinistatementTxnComponent } from './pages/aeps/ministatement-txn/ministatement-txn.component';
import { PanComponent } from './pages/pan/pan.component';
import { PanStatementComponent } from './pages/pan/pan-statement/pan-statement.component'; 
import { ComplaintChatComponent as ComplaintChatComponent2 } from './pages/super-admin/trackcomplaint/complaint-chat/complaint-chat.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommLicBillpayComponent } from './pages/commission/othercomm/comm-lic-billpay/comm-lic-billpay.component';
import { PancommComponent } from './pages/commission/othercomm/pancomm/pancomm.component';
import { PaytmWalletComponent } from './pages/commission/othercomm/paytm-wallet/paytm-wallet.component';
import { CcBillPayComponent } from './pages/commission/othercomm/cc-bill-pay/cc-bill-pay.component';
import { CustomOtpComponent } from './_helpers/common/custom-otp/custom-otp.component';
import { FocusToNextInputDirective } from './_helpers/common/custom-directive/focus-to-next-input.directive';
import { MobikwikCheckWalletComponent } from './pages/wallet/mobikwik-check-wallet/mobikwik-check-wallet.component';
import { MobikwikCheckoutWalletComponent } from './pages/wallet/mobikwik-checkout-wallet/mobikwik-checkout-wallet.component';
 
import { RetailerNotificationComponent } from './pages/retailer-notification/retailer-notification.component'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { WebsiteSettingsComponent } from './pages/website-settings/website-settings.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    FooterComponent,
    LoginComponent,
    ChangePasswordComponent,
    DashboardComponent,
    AboutUsComponent,
    AddFundComponent,
    CheckMobileComponent,
    RegistrationComponent,
    DmtdashoardComponent,
    DmthandlerComponent,
    TransactionConfirmComponent,
    BbpsDashboardComponent,
    OtpVerificationDirective,
    CustomModelComponent,
    BalanceEnquiryComponent,
    MiniStatementComponent,
    AadhaarPayComponent,
    ScannerSettingComponent,
    CashWithdrawlComponent,
    AepshandlerComponent,
    BbpshandlerComponent,
    BbpsPartnerComponent,
    PaymentStatusComponent,
    LicComponent,
    DataTableToolsComponent, 
    CheckWalletComponent,
    CheckoutWalletComponent,
    RechargeHandlerComponent,
    PageNotFoundComponent,
    SidebarComponent,
    RetailerComponent,
    AdminComponent,
    SuperAdminComponent,
    PaymentGatewayComponent,
    RetailerDashboardComponent,
    AdminDashboardComponent,
    SuperadminDashboardComponent,
    AccountCreateHandlerComponent,
    CreateAdminComponent,
    ListAdminComponent,
    ListStaffComponent,
    CreateStaffComponent,
    CreatePartnerComponent,
    FundRequestListAdminComponent,
    ListPartnerComponent,
    CreateDistributorComponent,
    ListDistributorComponent,
    DistributerComponent,
    FundHandlerComponent,
    CreateFundRequestComponent,
    FundRequestListingComponent,
    FundTransferToRetailerComponent,
    FundAdminListingComponent,
    FundAdminCreateComponent,
    FundAdminApproveComponent,
    AddCompanyBankComponent,
    ListCompanyBankComponent,
    CreateRetailerComponent,
    ListRetailerComponent,
    PermissionsComponent,
    CreateAsmComponent,
    ListAsmComponent,
    CreateSupdistributorComponent,
    ListSupdistributorComponent,
    RedirectComponent,
    PgRecepitComponent, 
    SendOtpComponent,
    TransactionComponent,
    CashdepositHandlerComponent,
    FundTransferComponent,
    ServiceControlComponent,
    FundTransferListComponent,
    AddNotificationComponent,
    ListNotificationComponent,
    NotificationhandlerComponent,
    ListComplaintComponent,
    CommissionComponent,
    AepsComponent,
    DmtComponent,
    MatmComponent,
    RechargeComponent,
    PgComponent,
    ListcomplaintComponent,
    AddcomplaintComponent,
    ComplainthandlerComponent,
    CheckTxnStatusComponent,
    RefundComponent,
    PolicyComponent,
    PayoutComponent,
    ListAccountComponent,
    AddAccountComponent,
    StatusEnquiryComponent,
    RefundCancellationPolicyComponent,
    TermConditionComponent,
    ContactUsComponent,
    TransactionDetailsComponent,
    AddRateComponent,
    TransactionsComponent,
    ComplaintChatComponent,
    ForgotPasswordComponent,
    PurchaseComponent,
    IdPurchaseComponent,
    PurchaseHistoryComponent,
    IdTransferComponent,
    PartnerDashboardComponent,
    SuperDistributorDashboardComponent,
    DistributorDashboardComponent,
    SuperDistributorComponent,
    PartnerComponent,
    SignupFormComponent,
    SignupUserListComponent,
    PrintDetailsComponent,
    MarchantOnboardingComponent,
    MarchantListComponent,
    MarchantDetailsComponent,
    OthercommComponent,
    BillpaycommComponent,
    CommAadhaarComponent,
    CommCashdepositComponent,
    CommMiniStatementComponent,
    CommSettlementComponent,
    MobikcommComponent,
    PaytmcomComponent,
    OnlyNumberDirective,
    CallbackurlComponent,
    ReplacePipe,
    CreateStaffComponent,
    AddFundComponent,
    ListStaffComponent, 
    CreditCardBillComponent,
    CreditCardHandlerComponent,
    AadharPayReceiptComponent,
    CashWithdrawalReceiptComponent,
    BalanceEnquiryReceiptComponent,
    MiniStatementReceiptComponent,
    AepsReceiptComponent,
    UploadDocumentsComponent,
    KycUserListComponent, 
    MyprofileComponent,
    GetIndexPipe,
    DebitReceivingComponent,
    SlipPrintComponent,
    RiCustomMdlComponent,
    AutocompleteOffDirective,
    MinistatementTxnComponent,
    PanComponent,
    PanStatementComponent, 
    ComplaintChatComponent2,
    PaytmWalletComponent,
    CommLicBillpayComponent,
    PancommComponent,
    CommLicBillpayComponent,
    PayoutCommissionComponent,
    CcBillPayComponent,
    CustomOtpComponent,
    FocusToNextInputDirective, 
    MobikwikCheckWalletComponent,
    MobikwikCheckoutWalletComponent, 
    RetailerNotificationComponent, WebsiteSettingsComponent
    
  ],
  imports: [
    BrowserModule,
    NgSelect2Module,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    NgOtpInputModule,
    AutocompleteLibModule,
    NgbModule,
    NgxPrintModule,
    ModalModule,
    NgApexchartsModule,
    CarouselModule,  
    AngularEditorModule
  ],
  providers: [
    DatePipe,
    [
      { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
