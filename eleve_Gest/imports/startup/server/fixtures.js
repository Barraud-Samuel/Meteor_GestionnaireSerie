// Fill the DB with example data on startup

/*import { Meteor } from 'meteor/meteor';
import { Eleves } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Eleves collection is empty
  if (Eleves.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Eleves.insert(link));
  }
});*/