describe("a test about karma",function(){
	it(" check the function ",function(){
		var result = add(3,5);
		expect(result).toEqual(8);

		result = add(3,4);
		expect(result).toEqual(1);
	});
});