const API_URL = 'http://localhost:3000';

export const getCategorias = async () => {
    // Forzamos la URL exacta que tu backend está esperando
    const response = await fetch('http://localhost:3000/categorias'); 
    
    if (!response.ok) {
        throw new Error('Error al obtener las categorías');
    }
    return response.json();
};