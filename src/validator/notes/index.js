const { NotePayloadSchema } = require("./schema");

const NotesValidation ={
    validateNotePayload: (payload) => {
        const validateNotePayload = NotePayloadSchema.validate(payload);
        if (validationReasult.error){
            throw new Error(validationResult.error.message);
        }

    },
};

mpdule.export = NotesValidator;