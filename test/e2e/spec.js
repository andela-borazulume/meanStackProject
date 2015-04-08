describe('Test this suite', function(){
	var foo;
	it('specs', function(){
		foo = 12;
		var bar = foo, fuzz;
		expect(foo).toEqual(12);
		expect(bar).toEqual(foo);
		expect(fuzz).toBeUndefined();

	});

	it('test specs', function(){
		var a = {
			foo: 'foo'
		};

		expect(a.foo).toBe('foo');

	});
});