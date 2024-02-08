import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { store } from 'src/store/store';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  _state: any;
  public isMobile: boolean = false;
  mobileWidth: number = 780;
  isActive = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router: Router,
    private detectChange: ChangeDetectorRef,
    public translate: TranslateService
  ) {
    this._state = store.state;
    this.isLoggedIn = this._state.isLoggedIn();
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= this.mobileWidth;
  }

  public handleClass() {
    return (this.isActive = !this.isActive);
  }

  public navigateTo(path: string) {
    this._router.navigateByUrl(path);
    this.isActive = false;
  }
}
