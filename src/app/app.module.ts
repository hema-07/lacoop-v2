import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { OrdersManagement } from '../pages/orders-management/orders-management';
import { OrdersManagementDetails } from '../pages/orders-management-details/orders-management-details';
import { OrderDashboard } from '../pages/order-dashboard/order-dashboard';
import { InitiateJob } from '../pages/order-initiatejob/initiate-job';
import { JobDetails1 } from '../pages/order-init-detail1/order-init-detail1';
import { InitiateJob1 } from '../pages/order-initiatejob1/initiate-job1';
import { JobDetails } from '../pages/order-init-detail/order-init-detail';
import { ShipmentAdvice } from '../pages/order-shipmentadvice/shipment-advice';
import { Procurement } from '../pages/order-procurement/procurement';
import { FinanceDashboard } from '../pages/finance-dashboard/finance';
import { MatchReceipts } from '../pages/finance-matchreceipts/match-receipts';
import { PastJournals } from '../pages/finance-pastjournals/past-journals';
import { ProcessSupplierInvoice } from '../pages/finance-processsupplierinvoice/process-supplier-invoice';
import { FinanceInvoice } from '../pages/finance-invoice/finance-invoice';
import { ItemDetails2 } from '../pages/orders-management-details-item2/item2';
import { InitiateDashboard } from '../pages/order-init-dashboard/order-init-dashboard';
import { JobList } from '../pages/joblist/joblist';
import { ShipmentAdviceDashboard } from '../pages/shipment-advice/shipment-advice';
import { GobackPage } from '../pages/goback/goback';
import { PaPage } from '../pages/pa/pa';
import { PadetailsPage } from '../pages/padetails/padetails';
import { Procurement1 } from '../pages/order-procurement1/procurement1';
import { Procurement2 } from '../pages/order-procurement2/procurement2';
import { DashboardProcurement } from '../pages/dashboard-procurement/dashboard-procurement';
import { CreateOrder } from '../pages/create-order/createorder';
import { DashboardPurchase } from '../pages/dashboard-purchase/purchase';
import { FarmerDashboardPage } from '../pages/farmer-dashboard/farmer-dashboard';
import { GoodsDetailsPage } from '../pages/goods-details/goods-details';
import { GoodsViewPage } from '../pages/goods-view/goods-view';

@NgModule({
  declarations: [
    MyApp,
    GoodsViewPage,
    GoodsDetailsPage,
    FarmerDashboardPage,
    HomePage,
    DashboardPurchase,
    Dashboard,
    OrdersManagement,
    OrdersManagementDetails,
    OrderDashboard,
    FinanceDashboard,
    InitiateJob,
    InitiateJob1,
    ShipmentAdvice,
    Procurement,
    MatchReceipts,
    PastJournals,
    ProcessSupplierInvoice,
    FinanceInvoice,
    JobDetails,
    ItemDetails2,
    InitiateDashboard,
    JobList,
    ShipmentAdviceDashboard,
    GobackPage,
    PaPage,
    PadetailsPage,
    JobDetails1,
    Procurement1,
    Procurement2,
    DashboardProcurement,
    CreateOrder
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoodsViewPage,
    GoodsDetailsPage,
    HomePage,
    DashboardPurchase,
    FarmerDashboardPage,
    Dashboard,
    OrderDashboard,
    OrdersManagement,
    OrdersManagementDetails,
    FinanceDashboard,
    InitiateJob,
    ShipmentAdvice,
    Procurement,
    MatchReceipts,
    PastJournals,
    ProcessSupplierInvoice,
    FinanceInvoice,
    JobDetails,
    ItemDetails2,
    InitiateDashboard,
    JobList,
    ShipmentAdviceDashboard,    
    InitiateJob1,
    GobackPage,
    PaPage,
    PadetailsPage,
    JobDetails1,
    Procurement1,
    Procurement2,
    DashboardProcurement,
    CreateOrder
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
