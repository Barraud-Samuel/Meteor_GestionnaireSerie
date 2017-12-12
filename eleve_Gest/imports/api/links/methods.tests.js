// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Eleves } from './links.js';
import './methods.js';

if (Meteor.isServer) {
  describe('eleves methods', function () {
    beforeEach(function () {
      Eleves.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['eleves.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Eleves.find().count(), 1);
    });
  });
}
