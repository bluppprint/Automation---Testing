describe('sign up functionality TheOdinProject.com', () => {


    it('should load website', async () => {
        await browser.url('https://www.theodinproject.com');
        
 });

    it('should have correct page title', async ()  => {
     await browser.url('https://www.theodinproject.com');
     await expect(browser).toHaveTitle('Your Career in Web Development Starts Here | The Odin Project');

        
    });

    it('should have get started button', async () => {
        
        const getStarted = await $('a.button--primary');
         await expect(getStarted).toBeDisplayed();
    });

    it('should open sign in page', async () => {
        const getStarted = await $('a.button--primary');
        await getStarted.click();
        await expect(browser).toHaveTitle('Sign up | The Odin Project');
      
    });
    
});