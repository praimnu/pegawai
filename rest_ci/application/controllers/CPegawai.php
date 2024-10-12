<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class CPegawai extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->database();
    }

    //Menampilkan data
    function index_get() {
        $id = $this->get('nip');
        if ($id == '') {
            $data = $this->db->get('pegawai')->result();
        } else {
            $this->db->where('nip', $id);
            $data = $this->db->get('pegawai')->result();
        }
        $this->response($data, 200);
    }


    //Masukan function selanjutnya disini
}
?>