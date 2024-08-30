import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, NewTaskComponent, TaskComponent],
    imports: [ BrowserModule, FormsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}