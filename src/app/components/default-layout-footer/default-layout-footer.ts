import { Component, Input, input } from '@angular/core';
import { RouterLink } from "@angular/router";

type InputTypes = "button";

@Component({
  selector: 'app-default-layout-footer',
  imports: [RouterLink],
  templateUrl: './default-layout-footer.html',
  styleUrl: './default-layout-footer.scss'
})
export class DefaultLayoutFooter {
}
