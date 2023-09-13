import { NgxLoggerLevel } from "ngx-logger";

export const environment={
  production:false,
  registerDomain:"http://localhost:3000/userRegisterData/",
  orderHistoryDomain:"http://localhost:3000/orderHistory/",
  restaurants:"http://localhost:3000/restaurants",
  baseUrl:"http://localhost:3000",
  razorPayAPIKey:"rzp_test_fobb3va5Swj0eJ",
  // errorLogging:"http://localhost:3000/error",
  logging:{serverLoggingUrl: "http://localhost:3000/error",
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.INFO}
};
