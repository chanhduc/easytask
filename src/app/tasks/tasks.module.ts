import { NgModule } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared.module";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations: [TaskComponent, TasksComponent, NewTaskComponent],
    imports: [SharedModule, FormsModule, DatePipe],
    providers: [],
    exports: [TasksComponent]
})
export class TasksModule {
    
}