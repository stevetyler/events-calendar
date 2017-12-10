import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('event-entries', 'Integration | Component | event entries', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //this.set('events', );

  this.render(hbs`{{event-entries}}`);

  assert.equal(this.$().text().trim(), '');

  });
