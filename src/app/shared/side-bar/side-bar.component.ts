import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private _opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  _toggleOpened(): void {
    this._opened = !this._opened;
  }

  _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  _toggleDock(): void {
    this._dock = !this._dock;
  }

  _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  _onOpened(): void {
    console.info('Sidebar opened');
  }

  _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  _onClosed(): void {
    console.info('Sidebar closed');
  }

  _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }
}
