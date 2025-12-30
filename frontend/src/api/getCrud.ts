export type Todo = {
    id: number;
    text: string;
}
// “Backend-dən gələn data bu formada OLMALIDIR” - type part backennde gelen sorgulari qebul edirik. ele bil flow bele gedir. Biz frontednden gonderirik backend onu dto ile tutmalidir (1 check) sonra backend gonderir front onu api hisseden tutmalidir (2 check)
// Ümumi flow
// Frontend → Backend DTO → Business logic → Backend response DTO
// → Frontend API layer → UI


// Yəni:

// Frontend → Backend
// → Backend DTO ilə validate edir ✅

// Backend → Frontend
// → Frontend type ilə qəbul edir ✅

// Bu production-level düşüncədir.

const API_URL = import.meta.env.VITE_API_URL

export const getAllTodos = async() : Promise<Todo> => {
    const response = await fetch(API_URL)
     if (!response.ok) {
        throw new Error('failed to response')
     }
        
    return response.json()
}
// native fetch de biz .env yazriiq VITE ile url sonra onu deyisene beraber edib, funksiya icinde CRUD opeators ile yaziriq.