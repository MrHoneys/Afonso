function enviarWhatsapp() {
    var nome = document.getElementById('name-1019').value;
    var mensagem = document.getElementById('message-1019').value;
    
    var texto = encodeURIComponent("Nome: " + nome + "\nMensagem: " + mensagem);
    var numeroWhatsapp = "+"; // Seu número do WhatsApp
    
    var url = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + texto;
    
    window.open(url);
  }