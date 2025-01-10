QUnit.module('getColors', function() {
    QUnit.test('Get BLUE', function(assert) {

        var result =getColors('blue');
        let expected_res ={
            status:'Success',
            color:'#0000ff',
            message:'Color found: #0000ff'
        };
      assert.deepEqual(result, expected_res);
    });
    
    QUnit.test('Get GREEN', function(assert) {

        var result =getColors('green');
        let expected_res ={
            status:'Success',
            color:'#008000',
            message:'Color found: #008000'
        };
      assert.deepEqual(result, expected_res);


    });
  });
