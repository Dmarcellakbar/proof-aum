// lib/posts.js 
// lib/posts.js 

export async function getPostIdList() {
  return [{
    params: {
      id: 'detail1'
    }
  }, {
    params: {
      id: 'detail2'
    }
  }, {
    params: {
      id: 'detail3'
    }
    
  }, {
    params: {
      id: 'detail4'
    }
    
  }, {
    params: {
      id: 'detail5'
    }
    
  }, {
    params: {
      id: 'detail6'
    }
    
  }]
}

export async function getPostDetails(postId) {
    const dataSet = {
      'detail1': {
        title: 'Account 1',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      },
      'detail2': {
        title: 'Account 2',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      },
      'detail3': {
        title: 'Account 3',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      },
      'detail4': {
        title: 'Account 4',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      },
      'detail5': {
        title: 'Account 5',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      },
      'detail6': {
        title: 'Account 6',
        stat: 'Binance',
        asset: '1.000.000',
        token: '5'
      }
    }
    return dataSet[postId]
  }
