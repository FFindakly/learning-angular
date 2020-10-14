import { getLocaleEraNames } from '@angular/common';
import { Content } from './content-interface';

/*
    Craeteed by: Fadi Findakly
    Last Update: Oct. 07, 2020
*/

export class ContentsList {
  private _contentItems: Content[];

  // Class constructor
  constructor(contents: Content[]) {
    this._contentItems = contents;
  }

  // Getters
  get contentItems(): Content[] {
    return this._contentItems;
  }

  // Add a content item to the end of the contentItems array
  addItem(content: Content) {
    this._contentItems.push(content);
  }

  // Get the number of content items in the contentItems array
  getCount(): number {
    return this._contentItems.length;
  }

  // Get a content item at a given index
  getContentItem(index: number) {
    if (index <= this._contentItems.length - 1) {
      return `<article>
                <h1>${this._contentItems[index].title}</h1>
                <p class="author">Author: ${this._contentItems[index].author} || <span><small>Article type: ${this._contentItems[index].type}</small></span></p>
                <img src=${this._contentItems[index].imageUrl} width="500" height="350" />
                <p>${this._contentItems[index].body}</p>
                <small>Tags: ${this._contentItems[index].tags}</small>
             </article>`;
    } else {
      return `<div>
                <h1>This item does not exist</h1>
             </div>`;
    }
  }
}