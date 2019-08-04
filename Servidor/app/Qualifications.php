<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Qualifications extends Model
{
    protected $fillable = [
         'note1','note2','note3','noteEnd','description','state',
    ];
    public function proyect()
    {
        return $this->hasOne('App\Proyect');
    }
}