import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns} from '../../utils/utils.jsx'




const renderFields = (fields) => {

    const errorList = [];
    for (var key in fields){
        if (fields.hasOwnProperty(key) && fields[key] && fields[key]['meta'] && fields[key]['meta']['touched'] && fields[key]['meta']['error']){
            errorList.push({field: key , message: fields[key]['meta']['error']})
        }
    }
    const showError = errorList.length > 0 ? 'block' : 'none'
    return (
        <div>
            <div className="errors" style={{display: showError}}>
                <ul className="error-list">
                    {
                        errorList.map(error => (
                            <li key={error.field} className={error.field}>{error.message}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="two-col">
                <div className="left">

                    <div className="sub-col-wrapper">
                        <div className={fields[TermNames.Pets]['meta']['error'] && fields[TermNames.Pets]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label className="dp3-title" title="Do any tenants own a dog?">Do you own a dog?</label>
                            <div className="col-50-percent">
                                <input type="radio" className={fields[TermNames.Pets]['meta']['error'] && fields[TermNames.Pets]['meta']['touched'] ? 'error inline-block' : 'inline-block'} name={fields[TermNames.Pets].input.name} onChange={fields[TermNames.Pets].input.onChange} checked={fields[TermNames.Pets].input.value == '100'} value="100" id="S3_5_DogOwner-yes" data-for="dog-breeds-parent" data-show="dog-breeds"/><label htmlFor="S3_5_DogOwner-yes" >Yes</label>
                            </div>
                            <div className="col-50-percent">
                                <input type="radio" className={fields[TermNames.Pets]['meta']['error'] && fields[TermNames.Pets]['meta']['touched'] ? 'error inline-block' : 'inline-block'} name={fields[TermNames.Pets].input.name} onChange={fields[TermNames.Pets].input.onChange} checked={fields[TermNames.Pets].input.value == '200'} value="200" id="S3_5_DogOwner-no" data-for="dog-breeds-parent"/><label htmlFor="S3_5_DogOwner-no">No</label>
                            </div>
                        </div>

                        {fields[TermNames.Pets].input.value == '100' ?
                            <div className={fields[TermNames.Dogs]['meta']['error'] && fields[TermNames.Dogs]['meta']['touched'] ? 'error gray-box-wrapper  dog-breeds dog-breeds-parent tb-15-margin radio-error' : 'gray-box-wrapper  dog-breeds dog-breeds-parent tb-15-margin radio-error'} >
                                <label className="normal dp3-title" title="Do any tenants own any of these breeds?">Do you own any of these breeds?</label>
                                <div className="sub-col-wrapper">
                                    <div className="col-50-percent">
                                        <input type="radio" className={fields[TermNames.Dogs]['meta']['error'] && fields[TermNames.Dogs]['meta']['touched'] ? 'error inline-block' : 'inline-block'} name={fields[TermNames.Dogs].input.name} onChange={fields[TermNames.Dogs].input.onChange} checked={fields[TermNames.Dogs].input.value == '100'} value="100" id="S3_5_DogBreeds-yes" data-new-href="#/section=3&step=3.1.1&error=317" data-new-href-block="true" /><label htmlFor="S3_5_DogBreeds-yes">Yes</label>
                                    </div>
                                    <div className="col-50-percent">
                                        <input type="radio" className={fields[TermNames.Dogs]['meta']['error'] && fields[TermNames.Dogs]['meta']['touched'] ? 'error inline-block' : 'inline-block'} name={fields[TermNames.Dogs].input.name} onChange={fields[TermNames.Dogs].input.onChange} checked={fields[TermNames.Dogs].input.value == '200'} value="200" id="S3_5_DogBreeds-no"/><label htmlFor="S3_5_DogBreeds-no" >No</label>
                                    </div>
                                </div>

                                <div className="body small tb-15-margin">
                                    Akita<br/>
                                    Alaskan Malamute<br/>
                                    American Staffordshire Terrier<br/>
                                    Boxer<br/>
                                    Bull Mastiff<br/>
                                    Bull Terrier<br/>
                                    Chow<br/>
                                    Giant Schnauzer<br/>
                                    Great Dane<br/>
                                    Mastiff<br/>
                                    Neopolitan Mastiff<br/>
                                    Ovtcharka<br/>
                                    Pit Bull Terrier<br/>
                                    Presa Canario<br/>
                                    Rhodesian Ridgeback<br/>
                                    Rottweiler<br/>
                                    Siberian Husky<br/>
                                    Staffordshire Bull Terrier<br/>
                                    Wolf or Wolf Hybrid<br/>
                                    Any breed or mix of guard dog (i.e. Doberman Pinscher or German Shepherd)<br/>
                                </div>

                            </div> : null }
                    </div>

                </div>
                <div className="right">
                    <label>Distance to nearest Fire Hydrant:</label>
                    <select className={fields[TermNames.DistanceFireHydrant]['meta']['error'] && fields[TermNames.DistanceFireHydrant]['meta']['touched'] ? 'error ' : ''} {...fields[TermNames.DistanceFireHydrant].input} data-dropdown-menus="DistanceToFireHydrant">{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'DistanceToFireHydrant')}</select>

                    <label>Is there a Swimming Pool?</label>
                    <select className={fields[TermNames.PoolType]['meta']['error'] && fields[TermNames.PoolType]['meta']['touched'] ? 'error ' : ''} {...fields[TermNames.PoolType].input}data-for="S3_5_SwimmingPool-parent" data-dropdown-menus="SwimmingPool">{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'SwimmingPool')}</select>

                    {fields[TermNames.PoolType].input.value == '100' ?
                        <div className="gray-box-wrapper in-ground-pool S3_5_SwimmingPool-parent tb-15-margin">

                            <div className="sub-col-wrapper">
                                <div className={fields[TermNames.PoolFence]['meta']['error'] && fields[TermNames.PoolFence]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                                    <label>Is property around pool fenced?</label>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.PoolFence].input.name} onChange={fields[TermNames.PoolFence].input.onChange} checked={fields[TermNames.PoolFence].input.value == '100'} value="100" id="S3_5_PropertyFenced-yes" /><label htmlFor="S3_5_PropertyFenced-yes" className="inline-block">Yes</label>
                                    </div>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.PoolFence].input.name} onChange={fields[TermNames.PoolFence].input.onChange} checked={fields[TermNames.PoolFence].input.value == '200'} value="200" id="S3_5_PropertyFenced-no" data-new-href="#/section=3&step=3.1.1&error=313" data-new-href-block="true" /><label htmlFor="S3_5_PropertyFenced-no" className="inline-block">No</label>
                                    </div>
                                </div>

                                <div className="tb-15-margin"></div>

                                <div className={fields[TermNames.DivingBoardSlide]['meta']['error'] && fields[TermNames.DivingBoardSlide]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                                    <label>Is there a diving board or slide?</label>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.DivingBoardSlide].input.name} onChange={fields[TermNames.DivingBoardSlide].input.onChange} checked={fields[TermNames.DivingBoardSlide].input.value == '100'} value="100" id="S3_5_BoardOrSlide-yes" data-new-href="#/section=3&step=3.1.1&error=314" data-new-href-block="true" /><label htmlFor="S3_5_BoardOrSlide-yes" className="inline-block">Yes</label>
                                    </div>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.DivingBoardSlide].input.name} onChange={fields[TermNames.DivingBoardSlide].input.onChange} checked={fields[TermNames.DivingBoardSlide].input.value == '200'} value="200" id="S3_5_BoardOrSlide-no" /><label htmlFor="S3_5_BoardOrSlide-no" className="inline-block" >No</label>
                                    </div>
                                </div>
                            </div>
                        </div> : null}

                    {fields[TermNames.PoolType].input.value == '200' ? <div className="gray-box-wrapper above-ground-pool S3_5_SwimmingPool-parent tb-15-margin" >

                        <div className="sub-col-wrapper">
                                <div className={fields[TermNames.DivingBoardSlide]['meta']['error'] && fields[TermNames.DivingBoardSlide]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                                    <label>Is there a diving board or slide?</label>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.DivingBoardSlide].input.name} onChange={fields[TermNames.DivingBoardSlide].input.onChange} checked={fields[TermNames.DivingBoardSlide].input.value == '100'} value="100" id="S3_5_BoardOrSlide-yes" data-new-href="#/section=3&step=3.1.1&error=314" data-new-href-block="true" /><label htmlFor="S3_5_BoardOrSlide-yes" className="inline-block">Yes</label>
                                    </div>
                                    <div className="col-50-percent">
                                        <input type="radio" name={fields[TermNames.DivingBoardSlide].input.name} onChange={fields[TermNames.DivingBoardSlide].input.onChange} checked={fields[TermNames.DivingBoardSlide].input.value == '200'} value="200" id="S3_5_BoardOrSlide-no" /><label htmlFor="S3_5_BoardOrSlide-no" className="inline-block" >No</label>
                                    </div>
                                    </div>

                            <div className="tb-15-margin"></div>

                            <div className={fields[TermNames.ImmovablePoolLadder]['meta']['error'] && fields[TermNames.ImmovablePoolLadder]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                                <label>Is there an immovable ladder?</label>
                                <div className="col-50-percent">
                                    <input type="radio" name={fields[TermNames.ImmovablePoolLadder].input.name} onChange={fields[TermNames.ImmovablePoolLadder].input.onChange} checked={fields[TermNames.ImmovablePoolLadder].input.value == '100'} value="100" id="S3_5_ImmovableLadder-yes" data-new-href="#/section=3&step=3.1.1&error=316" data-new-href-block="true"/><label htmlFor="S3_5_ImmovableLadder-yes" className="inline-block">Yes</label>
                                </div>
                                <div className="col-50-percent">
                                    <input type="radio" name={fields[TermNames.ImmovablePoolLadder].input.name} onChange={fields[TermNames.ImmovablePoolLadder].input.onChange} checked={fields[TermNames.ImmovablePoolLadder].input.value == '200'} value="200" id="S3_5_ImmovableLadder-no"/><label htmlFor="S3_5_ImmovableLadder-no" className="inline-block">No</label>
                                </div>
                            </div>
                        </div>

                    </div> : null}


                </div>
            </div>
        </div>

    )}

    export default renderFields