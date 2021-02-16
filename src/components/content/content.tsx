import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'play-content',
})
export class Content {
  render() {
    return (
      <Host>
        <h1>This is the content</h1>
      </Host>
    );
  }
}
