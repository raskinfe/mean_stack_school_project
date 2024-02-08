"use strict";

customElements.define(
  "compodoc-menu",
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute("mode") === "normal";
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-project documentation</a>
                </li>

                <li class="divider"></li>
                ${
                  isNormalMode
                    ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>`
                    : ""
                }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#modules-links"'
                                : 'data-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="modules-links"'
                            : 'id="xs-modules-links"'
                        }>
                            <li class="link">
                                <a href="modules/AdminDashboardModule.html" data-type="entity-link" >AdminDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                            : 'data-target="#xs-components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                            : 'id="xs-components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                        }>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OffersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OffersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                        : 'data-target="#xs-injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                        : 'id="xs-injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                            : 'data-target="#xs-components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                            : 'id="xs-components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                        }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                        : 'data-target="#xs-injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                        : 'id="xs-injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonModule.html" data-type="entity-link" >ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                                            : 'data-target="#xs-components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                                            : 'id="xs-components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                                        }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                                            : 'data-target="#xs-components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                                            : 'id="xs-components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                                        }>
                                            <li class="link">
                                                <a href="components/ChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateNewItemModule.html" data-type="entity-link" >CreateNewItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                                            : 'data-target="#xs-components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                                            : 'id="xs-components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                                        }>
                                            <li class="link">
                                                <a href="components/CreateNewItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                            : 'data-target="#xs-components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                            : 'id="xs-components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                        }>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                        : 'data-target="#xs-injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                        : 'id="xs-injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IssueModule.html" data-type="entity-link" >IssueModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                                            : 'data-target="#xs-components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                                            : 'id="xs-components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                                        }>
                                            <li class="link">
                                                <a href="components/IssueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IssueComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                            : 'data-target="#xs-components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                            : 'id="xs-components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                        }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                        : 'data-target="#xs-injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                        : 'id="xs-injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                            : 'data-target="#xs-components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                            : 'id="xs-components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                        }>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                        : 'data-target="#xs-injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                        : 'id="xs-injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SocketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OfferModule.html" data-type="entity-link" >OfferModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                                            : 'data-target="#xs-components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                                            : 'id="xs-components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                                        }>
                                            <li class="link">
                                                <a href="components/OfferComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfferComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResetPasswordModule.html" data-type="entity-link" >ResetPasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                                            : 'data-target="#xs-components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                                            : 'id="xs-components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                                        }>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProfileModule.html" data-type="entity-link" >UserProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                            : 'data-target="#xs-components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                            : 'id="xs-components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                        }>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                        : 'data-target="#xs-injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                        : 'id="xs-injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRegistrationModule.html" data-type="entity-link" >UserRegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                            : 'data-target="#xs-components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                            : 'id="xs-components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                        }>
                                            <li class="link">
                                                <a href="components/UserRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                        : 'data-target="#xs-injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                        : 'id="xs-injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#components-links"'
                            : 'data-target="#xs-components-links"'
                        }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="components-links"'
                            : 'id="xs-components-links"'
                        }>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#classes-links"'
                            : 'data-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="classes-links"'
                            : 'id="xs-classes-links"'
                        }>
                            <li class="link">
                                <a href="classes/AdminController.html" data-type="entity-link" >AdminController</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageController.html" data-type="entity-link" >ImageController</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageController.html" data-type="entity-link" >MessageController</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostController.html" data-type="entity-link" >PostController</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryResponse.html" data-type="entity-link" >QueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserController.html" data-type="entity-link" >UserController</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserIssueController.html" data-type="entity-link" >UserIssueController</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#injectables-links"'
                                : 'data-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${
                              isNormalMode
                                ? 'id="injectables-links"'
                                : 'id="xs-injectables-links"'
                            }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocketService.html" data-type="entity-link" >SocketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#guards-links"'
                            : 'data-target="#xs-guards-links"'
                        }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="guards-links"'
                            : 'id="xs-guards-links"'
                        }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link" >AuthGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#interfaces-links"'
                            : 'data-target="#xs-interfaces-links"'
                        }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? ' id="interfaces-links"'
                            : 'id="xs-interfaces-links"'
                        }>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataset.html" data-type="entity-link" >IDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIssue.html" data-type="entity-link" >IIssue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMessage.html" data-type="entity-link" >IMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPost.html" data-type="entity-link" >IPost</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestOptions.html" data-type="entity-link" >IRequestOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser-1.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="miscellaneous-links"'
                            : 'id="xs-miscellaneous-links"'
                        }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  }
);
