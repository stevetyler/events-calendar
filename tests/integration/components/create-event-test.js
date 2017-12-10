import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-event', 'Integration | Component | create event', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-event}}`);

  assert.equal(this.$('h2').text().trim(), 'Create New Event');
  assert.equal(this.$("button[type='submit']").text().trim(), 'Save');
  assert.equal(this.$("button[type='reset']").text().trim(), 'Clear');
});
