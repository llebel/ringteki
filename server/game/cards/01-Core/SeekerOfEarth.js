const RoleCard = require('../../rolecard.js');

class SeekerOfEarth extends RoleCard {
    setupCardAbilities() {
        this.reaction({
            title: 'Gain 1 fate',
            when: {
                onProvinceRevealed: event => event.province.controller === this.controller && this.hasTrait(event.province.getElement())
            },
            handler: context => {
                this.game.addMessage('{0} uses {1} to gain 1 fate when {2} is revealed', this.controller, this, context.event.province);
                this.game.addFate(this.controller, 1);
            }
        });
    }
}

SeekerOfEarth.id = 'seeker-of-earth';

module.exports = SeekerOfEarth;
