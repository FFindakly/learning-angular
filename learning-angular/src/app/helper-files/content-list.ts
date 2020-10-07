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
  getContentItem(index: number): Content {
    return this._contentItems[index];
  }
}
