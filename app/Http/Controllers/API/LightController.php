<?php
       
namespace App\Http\Controllers\API;
       
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Light;
use Validator;
use App\Http\Resources\LightResource;
use Illuminate\Http\JsonResponse;
       
class LightController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {
        $lights = Light::all();
        
        return $this->sendResponse(LightResource::collection($lights), 'Lights retrieved successfully.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {
        $input = $request->all();
       
        $validator = Validator::make($input, [
            'name' => 'required, max:255, string',
            'status' => 'required, boolean, default: false',
            'description' => 'nullable, max:255, string',
            'group_id' => 'required, integer, exists:groups,id',
        ]);
       
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
       
        $light = Light::create($input);
       
        return $this->sendResponse(new LightResource($light), 'Light created successfully.');
    } 
     
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id): JsonResponse
    {
        $light = Light::find($id);
      
        if (is_null($light)) {
            return $this->sendError('Light not found.');
        }
       
        return $this->sendResponse(new LightResource($light), 'Light retrieved successfully.');
    }
      
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Light $light): JsonResponse
    {
        $input = $request->all();
       
        $validator = Validator::make($input, [
            'name' => 'required, max:255, string',
            'status' => 'required, boolean, default: false',
            'description' => 'nullable, max:255, string',
            'group_id' => 'required, integer, exists:groups,id',
        ]);
       
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
       
        $light->name = $input['name'];
        $light->status = $input['status'];
        $light->description = $input['description'];
        $light->group_id = $input['group_id'];
        $light->save();
       
        return $this->sendResponse(new LightResource($light), 'Light updated successfully.');
    }
     
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Light $light): JsonResponse
    {
        $light->delete();
       
        return $this->sendResponse([], 'Light deleted successfully.');
    }
}