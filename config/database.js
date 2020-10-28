const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://prontVetDb:@protVet1@cluster0.3djv7.mongodb.net/pagamentos?retryWrites=true&w=majority", 
                                    {
                                        useNewUrlParser: true,
                                        useUnifiedTopology: true,
                                        useCreateIndex: true
                                    }
                                );

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' informado não é válido para o atributo '{PATH}'."