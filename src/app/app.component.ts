import { Component } from '@angular/core';
import { StartupService } from 'src/app/modules/core/services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public startScreen : boolean = true;
  public configData;

  constructor(
    private startupService: StartupService
  ) {

  }

  ngOnInit() {
    let sub = this.startupService.getConfigData().subscribe((data: any) => {
      this.configData = data;
      console.log('config data => ',this.configData);
      setTimeout(()=>{
        sub.unsubscribe();
      },50)
    })
  }

  loginOk(e) {
    this.configData.token = e;
    this.startScreen = !this.startScreen;
  }
}
