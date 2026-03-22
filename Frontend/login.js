// ============================================================
//  login.js — handles login for all 4 roles
//  DSA used: HashMap (simulated here as a JS object)
//            Same concept as HashMap<String, Student> in Java
// ============================================================

// This simulates the Java HashMap<String, Student>
// Key = userId, Value = { password, role, name }
const userDatabase = {
    // Students
    'STU001': { password: 'stu001', role: 'student',    name: 'Mohit Purohit'   },
    'STU002': { password: 'stu002', role: 'student',    name: 'Riya Sharma'     },
    // Ragpickers
    'RAG001': { password: 'rag001', role: 'ragpicker',  name: 'Ramesh Kumar'    },
    // Kabadiwala
    'KAB001': { password: 'kab001', role: 'kabadiwala', name: 'Suresh Gupta'    },
    // Recycler
    'REC001': { password: 'rec001', role: 'recycler',   name: 'GreenCycle Ltd'  }
};

function login() {
    const userId   = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;
    const role     = document.getElementById('role').value;
    const errorMsg = document.getElementById('errorMsg');

    // Basic validation
    if (!userId || !password) {
        errorMsg.textContent = 'Please fill in all fields.';
        return;
    }

    // O(1) lookup — same as HashMap.get(userId) in Java
    const user = userDatabase[userId];

    if (!user) {
        errorMsg.textContent = 'User ID not found.';
        return;
    }

    if (user.password !== password) {
        errorMsg.textContent = 'Wrong password.';
        return;
    }

    if (user.role !== role) {
        errorMsg.textContent = 'Wrong role selected for this ID.';
        return;
    }

    // Login success — save to localStorage and redirect
    localStorage.setItem('loggedInUser', JSON.stringify({
        userId: userId,
        name:   user.name,
        role:   user.role
    }));

    // Redirect based on role
    if      (role === 'student')    window.location.href = 'dashboard.html';
    else if (role === 'ragpicker')  alert('Ragpicker dashboard — coming soon (Priyanshu)');
    else if (role === 'kabadiwala') alert('Kabadiwala dashboard — coming soon (Himanshu)');
    else if (role === 'recycler')   alert('Recycler dashboard — coming soon (Divyanshu)');
}
