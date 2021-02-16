import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'play-container',
})
export class Container {
  @State() showContent = false;

  toggleSlot() {
    this.showContent = !this.showContent;
  }
  render() {
    return (
      <Host>
        <play-slot>{this.showContent && <play-content slot="s1"></play-content>}</play-slot>
        <p>This is some other content</p>
        <button onClick={() => this.toggleSlot()}>{this.showContent ? 'Hide' : 'Show'}</button>
      </Host>
    );
  }
}
