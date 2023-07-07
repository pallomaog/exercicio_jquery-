$(document).ready(function() {
    $('#cadastrarTarefa').on('click', function() {
      const nomeTarefa = $('#nomeTarefa').val();
      
      if (nomeTarefa.trim() !== '') {
        const li = $('<li></li>').text(nomeTarefa);
        const risco = $('<span class="risco verde"></span>');
        li.prepend(risco);
        $('#listaTarefas').append(li);
        $('#nomeTarefa').val('');
      }
    });
  
    $('#listaTarefas').on('click', 'li', function() {
      $(this).toggleClass('feito');
    });
  });
  