tinymce.init({
	selector: "#textarea",

	auto_focus: 'textarea',
	highlight_on_focus: true,
	language: 'it',
	placeholder: 'Start writing your article here...',
	width: "60%",
	height: 450,

	// Agginge un vincolo sulla prima riga dell'articolo: necessario un titolo.
	setup: function (editor) {
		editor.on('keyup', function () {
			const content = editor.getContent();
			const lines = content.split('\n');
			const firstLine = lines[0].trim();

			if (firstLine !== '') {
				const startsWithTitle = firstLine.startsWith('<h');
				if (!startsWithTitle) {
					editor.setContent('');
					alert("La prima linea dell'articolo deve essere un titolo!");
				}
				else {
					const title = firstLine.replace(/<\/?[^>]+(>|$)/g, ''); // Rimuovi i tag HTML
					if (title.length > 60) {
						editor.setContent('');
						alert("Il titolo non può superare i 55 caratteri!");
					}
				}
			}
		});
	},

	menubar: 'file edit insert format tools table',

	plugins: 'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
	toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
	tinycomments_mode: 'embedded',
	tinycomments_author: 'Author name',
	mergetags_list: [
		{ value: 'First.Name', title: 'First Name' },
		{ value: 'Email', title: 'Email' },
	],
});