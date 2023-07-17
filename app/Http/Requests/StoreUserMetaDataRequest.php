<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreUserMetaDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nick' => 'required|unique:user_meta_data|max:30',
            'birth_date' => 'required',
            'sex' => 'required',
            'user_id' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)

    {

        throw new HttpResponseException(response()->json([

            'data'      => $validator->errors()

        ]));

    }
    
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nick.required' => 'Nick é obrigatório',
            'birth_date.required' => 'Data de nascimento é obrigatório',
            'sex.required' => 'Gênero é obrigatório',
            'user_id.required' => 'Usuário é obrigatório',
        ];
    }
}
