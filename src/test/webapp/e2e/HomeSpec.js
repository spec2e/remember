describe('homepage', function() {
    it('should say welcome', function() {
        browser.get('/remember');

        //element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.css('h1'));

        expect(greeting.getText()).toEqual('Kata 4 - AngularJS Service');
    });
});