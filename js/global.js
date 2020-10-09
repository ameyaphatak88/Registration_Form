function sendOwnerLead()
{
	let inpFullName = $("#name").val().trim();
	

	let newContact = 
	{
		prefix: "Little Heart",
		schoolName: "Little Heart School, Ranchi",
		sendEmailTo: "ameyaphatak88@gmail.com",
		details: 
		[
			{
				name: "Full Name",
				value: inpFullName
			}
		]
	};
	$.ajax
	({
		url: "https://institution.vawsum.com/Websites/sendContactEnquiry",
		type: "POST",
		data: JSON.stringify(newContact),
		contentType: "application/json"
	})
	.done(function (response) 
	{
		var res = JSON.parse(response);
		console.log(res.responseObject.contactId);

		if (res.isOk == true)
		{
			alert("Your form has been saved. Please save this Id: " + res.responseObject.contactId);
			download();
		}
		else
		{
			alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});