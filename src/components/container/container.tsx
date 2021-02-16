import { Component, h, Host, Element, State } from '@stencil/core';

@Component({
  tag: 'play-container',
})
export class Container {
  @Element() el;
  @State() rerender: boolean = false;
  private observer: MutationObserver;

  private get showContent(): boolean {
    return !!this.el.querySelector('[slot="s1"]');
  }

  componentDidLoad() {
    this.observer = new MutationObserver(mutations => {
      console.dir(mutations, this.el);
      this.rerender = !this.rerender;
    });

    this.observer.observe(this.el, { childList: true });
  }

  render() {
    return (
      <Host>
        <p>Above</p>
        {this.showContent && <slot name="s1"></slot>}
        <p>Below</p>
      </Host>
    );
  }
}
