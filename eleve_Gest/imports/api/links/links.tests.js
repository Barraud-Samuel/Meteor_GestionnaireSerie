// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Eleves } from './links.js';

if (Meteor.isServer) {
  describe('eleves collection', function () {
    it('insert correctly', function () {
      const linkId = Eleves.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Eleves.find({ _id: linkId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'eleves');
      assert.equal(count, 1);
    });
  });
}
