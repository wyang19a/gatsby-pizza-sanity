import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdHome as icon } from 'react-icons/md';

// build a custom sidebar
export default function Sidebar() {
  return (
    S.list()
      .title(`Slick's Slices`) // adds title to sidebar instead of `content`
      // create new sub item
      .items([
        S.listItem().title('Home Page').icon(icon).child(
          S.editor()
            .schemaType('storeSettings')
            // assign a human-friendly documentId
            .documentId('downtown')
        ),
        // add in the rest of our document list.
        ...S.documentTypeListItems().filter(
          (item) => item.getId() !== 'storeSettings'
        ),
      ])
  );
}
