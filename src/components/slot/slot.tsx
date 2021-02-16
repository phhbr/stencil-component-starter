import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'play-slot',
})
export class Slot {
  render() {
    return (
      <Host>
        <slot name="s1" />
      </Host>
    );
  }
}
