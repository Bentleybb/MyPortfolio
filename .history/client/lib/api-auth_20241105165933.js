/*const signin = async (user) => { 
    try {
    let response = await fetch('/auth/signin/', { 
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
    },
    credentials: 'include', 
    body: JSON.stringify(user)
    })
    return await response.json() 
    } catch(err) {
    console.log(err) 
    }
    }
    const signout = async () => { 
    try {
    let response = await fetch('/auth/signout/', {
    method: 'GET' }) 
    return await response.json()
    } catch(err) { 
    console.log(err)
    } 
    }
    export { signin, signout }
    
    
    */

    const signin = async (user) => { 
        try {
            let response = await fetch(http://localhost:5000/auth/signin/'', { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include', 
                body: JSON.stringify(user)
            });
    
            if (!response.ok) {
                // Throw an error if response is not ok (e.g., status 4xx or 5xx)
                throw new Error(`Server responded with status ${response.status}`);
            }
    
            const data = await response.json();
    
            if (!data) {
                throw new Error('Empty response body');
            }
    
            return data;
    
        } catch (err) {
            console.error('Error in signin API call:', err);
            // Return a default error message if there's an issue with the API call
            return { error: 'Error signing in. Please try again later.' };
        }
    };
    
    const signout = async () => { 
        try {
            let response = await fetch('/auth/signout/', {
                method: 'GET'
            });
    
            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }
    
            return await response.json();
    
        } catch (err) { 
            console.error('Error in signout API call:', err);
            return { error: 'Error signing out. Please try again later.' };
        }
    };
    
    export { signin, signout };
    