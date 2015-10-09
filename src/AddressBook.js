function AddressBook() {
	this.contactList = [];
}

AddressBook.prototype.addContact = function(contact) {
	this.contactList.push(contact);
}

AddressBook.prototype.getContact = function(index) {
	return this.contactList[index];
}