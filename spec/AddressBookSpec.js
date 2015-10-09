describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressBook = new AddressBook();
		var contact = new Contact();

		addressBook.addContact(contact);
		expect(addressBook.getContact(0)).toBe(contact);
	});
});