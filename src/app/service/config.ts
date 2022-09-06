/**All the end urls are present here. */

export var config = {
  // Basic Configuration Of Api Start Here
  login: "login",
  getsettings:"setting/Setting/get",
  Setting_update:"setting/Setting/update",
  changePass: "settings",
  verify: "verifyOtp",
  getsingleuser:"user/Profile/index",
  ForgotPassword: "settings/forgotpassword",
  resendotp: "verify/resendotponcall",
  currenttxn: "dashboard/dashboard/index",
  mtd_lmtd: "dashboard/analytics/mtd_lmtd",
  walletbalance: "dashboard/dashboard/mainwallet",
  changepassword: "changepassword",
  allservicelist: "setting/servicecontrol",
  updateService: "setting/servicecontrol/setcontrol",
  forgotpasswordSentOtp : "resetPasswordOtp",
  forgotpasswordVerifyOtp : "resetPassword",
  sighnup: "user/selfsignup/create",
  sighnupList: "user/selfsignup/list",
  sighnupStatus: "user/selfsignup/change_status",
  adminFundadd: "funding/admin/add",
  getreferanceid: "unique/unique/index",
  product_wise_volume_share:'dashboard/analytics/product_wise_volume_share',
  business_trend:'dashboard/analytics/business_trend',
  signup: {
    verifyUser: "user/selfsignup/verification",
    verifyOtp: "user/selfsignup/verifyotp",
    input_check: "user/selfsignup/input_check",
    resendotp: "user/selfsignup/resendotp",
    signcreate: "user/selfsignup/create",
    resendsms: "user/selfsignup/resendsms",
   
  },
  opration: {
    debit: "funding/operation/debit",
    receiving: "funding/operation/receiving",
  },
  kyc: {
    uploaddoc: "user/retailer/kyc",
    list: "user/retailer/kyc/list",
    status: "user/retailer/kyc/change_status",
    getdocs: "user/retailer/kyc/getdocument",
  },
  merchant: {
    add: "onboard/onboard/getonboardurl",
    list: "onboard/onboard/list",
    details: "onboard/onboard/getdata",
  },
  dmt: {
    getRemmitance: "dmt/remitter/Remitter/getremitter",
    register: "dmt/remitter/Remitter/registerremitter",
    beneregistration: "dmt/remitter/Beneficiary/addreceiver",
    beneLisitng: "dmt/remitter/beneficiary/benelist",
    beneVerify: "dmt/remitter/beneverify/benenameverify",
    generateOTP: "dmt/remitter/Remitter/remitterotp",
    loginremitter: "dmt/remitter/Remitter/remitterlogin",
    bankListing: "dmt/remitter/beneficiary/banklist",
    changePin: "dmt/remitter/Remitter/changempin",
    resendPin: "dmt/remitter/Remitter/resendmpin",
    deleteBeniInit: "dmt/remitter/Updatebeneficiary/deleteinitiate",
    deleteBeniConfirm: "dmt/remitter/Updatebeneficiary/deleteconfirm",
    dmtTransactionInit: "dmt/remitter/transaction/traninitiate",
    dmtTransactionConfirm: "dmt/remitter/Transaction/dotransaction",
    txnstatus: "dmt/remitter/transaction/status",
    dmtTransaction: "dmt/remitter/transaction/list",
    txnStatus: "dmt/remitter/transaction/status",
    refundtxn: "dmt/remitter/refund/resendotp",
    refundOTP: "dmt/remitter/refund",
    pannyDrop: "dmt/remitter/Beneverify",
    gststate: "dmt/remitter/Remitter/getgststate",
  },
  statement: {
  
    recharge:"statement/recharge/list",
    rechargequery:"requery/recharge/query",
    rechargerefund:"requery/recharge/refund",


    billpayment:"statement/billpayment/list",
    billpaymentquery:"requery/billpayment/query",
    billpaymentrefund:"requery/billpayment/refund",


    wallet:"statement/wallet/list",
    walletquery:"requery/wallet/query",
    walletrefund:"requery/wallet/refund",


    matm:"statement/matmtxn/index",
    aeps:"statement/aepstxn",
    pg:"statement/pg/list",
    debitLedger:"statement/Transactioncashdeposit/list",
    creditLedger:"statement/transaction/list",
    adhaarpay:"statement/aadharpaytxn/list", 
    credit:"statement/credit/list",
    debit: "statement/debit/list", 

    ccpayment:"statement/ccpayment/list",
    ccquery:"requery/Creditcard/query",
    ccrefund:"requery/Creditcard/refund",

    dmt:{
      dmtlist: "statement/dmt/list",
      query:"requery/dmt/query",
      process:"requery/dmt/process",
      refund:"requery/dmt/refund",
    },
    payout:{
      payoutlist:"statement/payout/list",
      payoutquery:"requery/payout/query",
      payoutrefund:"requery/payout/refund",
     },


  },

  complaint:{
    list: "complaint/CustomerComplaint/complaintlist",
    add: "complaint/CustomerComplaint/complaint",
    chat:"complaint/CustomerComplaint/getrevertbyticketno",
    message:"complaint/CustomerComplaint/complaintrevert",
    adminlist: "complaint/CustomerComplaint/complaintlist",
  },
  CD:{
    sendotp: "cashdeposit/cashdeposit/sendotp",
    verifyotp: "cashdeposit/cashdeposit/verifyotp",
    transact: "cashdeposit/cashdeposit/transact",
  },
  purchase:{
    purchaseid: "purchase/purchase/",
    purchaseHistory: "purchase/purchase/list",
    transfer: "purchase/purchase/transferIds",
  },
  payout:{
    accountlist: "payout/payout/list",
    addaccount: "payout/Payout/add",
    uploaddoc: "payout/Payout/uploaddocument",
    dotxn: "payout/Payout/dotransaction",
    banklist: "payout/payout/banklist",
    txnlist: "payout/Payout/transactionlist",
    txnStatus : "payout/Payout/status"
  },
  bbps: {
    getcategory: "bbps/billpayment/getcategory",
    operator: "bbps/billpayment/getoperator",
    fetchbill: "bbps/billpayment/fetchbill",
    paybill: "bbps/billpayment/paybill",
    billstatus: "bbps/billpayment/status",
    fetchlicbill: "bbps/licbillpayment/fetchlicbill",
    paylicbill: "bbps/licbillpayment/paylicbill",
  },
  aeps: {
    banklist: "aeps/banklist/index",
    cashwithdraw: "aeps/cashwithdraw/index",
    balanceenquiry: "aeps/balanceenquiry/index",
    ministatement: "aeps/ministatement/index",
    aadharpayment: "aeps/aadharpay/index",
  },
  paytm: {
    sendotp: "wallet/paytm/sendotp",
    verifyotp: "wallet/paytm/verifyotp",
    checkout: "wallet/paytm/checkout"
  },
  mobikwik :{
    sendotp: "wallet/mobikwik/sendotp",
    verifyotp: "wallet/mobikwik/verifyotp",
    checkout: "wallet/mobikwik/checkout"
  },

  downloadstatement: {
    dmt: "statement/dmt/download",
    recharge:"statement/recharge/download",
    billpayment:"statement/billpayment/download",
    wallet:"statement/wallet/download",
    matm:"statement/matmtxn/download",
    aeps:"statement/aepstxn/download",
    creditledger:"statement/transaction/download",  
    debitledger:"statement/Transactioncashdeposit/download", 
    pg:"statement/pg/download",
    adhaarpay:"statement/aadharpaytxn/download",
    ministatementtxn:'statement/ministatementtxn',
    ministatementtxndownload:'statement/ministatementtxn/download',
    ministatementtxndetails:'statement/ministatementtxn/getmstxndetails',
    credit: 'statement/credit/download',
    debit: 'statement/debit/download',
    ccpaymentdownload:"statement/ccpayment/download"
  },

  recharge:{
    prepaid:{
      operator:"recharge/prepaidrecharge/getoperator",
      dorecharge:"recharge/prepaidrecharge/dorecharge",
      hlrcheck: "recharge/hlrapi/check",
      browseplan: "recharge/hlrapi/browseplan",
      disclaimer: "recharge/prepaidrecharge/disclaimer",
    },
    dth:{
      operator:"recharge/dthrecharge/getoperator",
      dorecharge:"recharge/dthrecharge/dorecharge",
      dthinfo: "recharge/hlrapi/dthinfo",
    },
    status:"recharge/prepaidrecharge/status"
  },
  account:{
    admin:{
      list:"user/admin/admin/adminlist",
      create:"user/admin/admin/create",
      update:"user/admin/admin/updateadmin",
      get:"user/admin/admin/getadmin"
    },
    staff:{
      list:"user/staff/staff/stafflist",
      create:"user/staff/staff/create",
      update:"user/staff/staff/updatstaff",
      get:"user/staff/staff/getstaff"
    },
    partner:{
      list:"user/partner/partner/list",
      create:"user/partner/partner/create",
      update:"user/partner/partner/update",
      get:"user/partner/partner/getpartner"
    },
    retailer:{
      list:"user/retailer/Createretailer/retailerlist",
      create:"user/retailer/Createretailer/create",
      update:"user/retailer/Createretailer/updateretailer",
      get:"user/retailer/Createretailer/getretailer"
    },
    supdistributor:{
      list:"user/super_distributor/superdistributor/list",
      create:"user/super_distributor/superdistributor/create",
      update:"user/super_distributor/superdistributor/update",
      get:"user/super_distributor/superdistributor/getsuperdistributor"
    },
    distributor:{
      list:"user/distributor/distributor/list",
      create:"user/distributor/distributor/create",
      update:"user/distributor/distributor/update",
      get:"user/distributor/distributor/getdistributor"
    },
    asm:{
      list:"user/asm/asmdata/listasm",
      create:"user/asm/asmdata/create",
      update:"user/asm/asmdata/update",
      get:"user/asm/asmdata/get"
    }

  },  
  companybank:{
    create: "company-bank/bank/add",
    list: "company-bank/bank/getlist",
    update: "company-bank/bank/update",
    get: "company-bank/bank/get"
  },
  notification:{
    create: "notification/notification/add",
    list: "notification/notification/getnotifications",
    update: "notification/notification/update",
    get: "notification/notification/getnotifications",
    active: "notification/notification/getActivenotification",
    toggle: "notification/notification/toggle",
    
  },
  fund:{
    lisitngAdmin: "funding/fundrequest/getadmin",
    lisitng:"funding/fundrequest/get",
    request:"funding/fundrequest/create",
    transfer:"funding/fundrequest/transfer",
    admin:{
      details:"funding/fundrequest/getFundingRequestDetail",
      add:"funding/admin/add",
      listing:"funding/fundrequest/getPendingRequestForAdminApproval",
      approve:"funding/admin/approve",
    },
    fundtransfer: "company-bank/bank/transfer",
    fundtransferlist: "company-bank/bank/transferlist",
    banklist: "company-bank/bank/getlist",
  },
  userlist:{
    partner: "user/dropdown/userlist/getpartner",
    superdistributor: "user/dropdown/userlist/getsuperdistributor",
    distributer: "user/dropdown/userlist/getdistributer",
    retailer: "user/dropdown/userlist/getretailer",
    asm: "user/dropdown/userlist/getasm",
  }, 
  permissionList:"permission/userpermission/index",
  userTypeList:"user/dropdown/userlist/getusertype",
  getSinglePermission:"user/permission/permission/index",
  updateSinglePermission:"user/permission/permission/update",
  setPermission:"permission/userpermission/setPermission",
  setuserRate: "purchase/setpurchase/update_rate",
  pg:{
    getpg:"pg/pg/index",
    pgreceipt: "pg/pg/transactionstatus"
  },
  commission:{
    getcommission: "commission/commission/getcommission",
    userlist: "commission/commission/getuserlist",
    updatecommission: "commission/commission/updatecommission",
    getoptrlist: "commission/commission/getoperatorlist",
  },
  creditCard:{
    requestOtp:"cc-payment/ccpayment/generateotp",
    paybill:"cc-payment/ccpayment/paybill",
    status:"cc-payment/ccpayment/status",
  },
  pan:{
    genrateUrl:"pan/pan/generateurl",
    panstatement:"statement/panstatement/list",
    panstatementdownload:'statement/panstatement/download',
  },
  // Authentication Configuration Of Api Start Here 
  tokenauth: "808B31E22610AF6077468B9E975521D6",
  Authkey: "MWQyMmUzNWY4YjhlNjY2NWJjM2EzZjY0NjNhZWM0ZTk="
};
