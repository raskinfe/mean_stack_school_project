var ROUTES_INDEX = {
  name: "<root>",
  kind: "module",
  className: "AppModule",
  children: [
    {
      name: "routes",
      filename: "src/views/src/app/app-routing.module.ts",
      module: "AppRoutingModule",
      children: [
        { path: "register", component: "UserRegistrationComponent" },
        { path: "login", component: "LoginComponent" },
        { path: "", component: "DashboardComponent" },
        {
          path: "profile",
          component: "UserProfileComponent",
          canActivate: ["AuthGuardService"],
        },
        {
          path: "create-new-item",
          component: "CreateNewItemComponent",
          canActivate: ["AuthGuardService"],
        },
        {
          path: "messages",
          component: "MessageComponent",
          canActivate: ["AuthGuardService"],
        },
        {
          path: "offers/:id",
          component: "OfferComponent",
          canActivate: ["AuthGuardService"],
        },
        { path: "reset-password", component: "ResetPasswordComponent" },
        {
          path: "admin",
          canActivate: ["AdminGuard"],
          component: "AdminDashboardComponent",
        },
        { path: "contact", component: "IssueComponent" },
      ],
      kind: "module",
    },
  ],
};
