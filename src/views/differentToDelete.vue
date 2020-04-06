categories: [
        {name: 'all', value: ''},
        {name: 'insect-collections', value: ''},
        {name: 'insects', value: ''},
        {name: 'entomological-boxes', value: ''},
        {name: 'entomological-pins', value: ''},
        {name: 'tools', value: ''},
        {name: 'books', value: ''},
        {name: 'defence-tools', value: ''}
      ],
      selected: 'all',
      sortedGoods: []




      if (this.sortedGoods.length) {
        return this.sortedGoods
      } else {
        return this.GOODS
      }