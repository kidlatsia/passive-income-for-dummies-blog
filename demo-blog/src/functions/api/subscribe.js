export async function onRequestPost({ request }) {
    try {
      // Parse form data from the request
      const formData = await request.formData();
      const email = formData.get('email');
  
      // Validate the email
      if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return new Response(JSON.stringify({ error: 'Invalid email address' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // Example: Log the email (replace with actual logic like saving to KV or Mailchimp)
      console.log(`New subscription: ${email}`);
  
      return new Response(
        JSON.stringify({ success: true, message: 'Subscription successful!' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Something went wrong.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  